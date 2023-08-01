
import json
import math
import time
import datetime
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS
import threading

compteurs = [
    ['172.102.84.59',[['12','Q11']]],
    ['172.102.84.60',[['13','Q6MAC'],['14','Q7PAL']]]
]

token = "b8jNIZJ134-454EhYHk_df3bwfuPAiCjoNQ5CREOTwwSUO3nAt94e_KWccqfk2WP469fETCdaUWlu3G2_BLceg=="
bucket = "test2"
org = "paprec"

class InfluxClient:
    def __init__(self,token,org,bucket): 
        self._org=org 
        self._bucket = bucket
        self._client = InfluxDBClient(url="http://172.16.160.2:8086", token=token)

    def write_data(self,data,write_option=SYNCHRONOUS):
        write_api = self._client.write_api(write_option)
        write_api.write(self._bucket, self._org , data,write_precision='ms', protocol="json")

    def write_api_close(self):
        write_api = self._client.write_api()
        write_api.close()

def InsertInflux(IC, data, measurement, date_value):
    data = json.loads(data)
    x = data['objects']


    value = [
        {
            "measurement": measurement,
            "tags": {
                "description": x["description"],
                "type": x["type"],
                "ip": x["ip"],
                "id": int(x["id"])
            },
            "time": date_value,
            "fields": {
                "id": int(x["id"]),
                "description": x["description"],
                "address": float(x["address"]),
                "bit": int(x["bit"]),
                "unit": x["unit"],
                "value_int": int(x['value']),
                "value_float": float(x["value"]),
                "value_str": str(x["value"])
            }
        }
    ]

    #print(value)
    IC.write_data(value)