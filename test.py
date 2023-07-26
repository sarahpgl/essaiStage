
import json
import math
import time
import datetime
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS
import threading
import random
import subprocess
from re import findall
from subprocess import Popen, PIPE, TimeoutExpired

compteurs = [
    ['172.102.84.59',[['12','Q11']]],
    ['172.102.84.60',[['13','Q6MAC'],['14','Q7PAL']]]
]

token = "6ZZ0Iq-xC0PsHMV6eUYdicPpMl25GAqI2_P-jEzmIrDBNPErqjcbApgYJ_Wxm7q6Cptx5YqF4Nlp1hda0sHJFg=="
bucket = "test"
org = "paprec"

class InfluxClient:
    def __init__(self,token,org,bucket): 
        self._org=org 
        self._bucket = bucket
        self._client = InfluxDBClient(url="http://localhost:8086", token=token)

    def write_data(self,data,write_option=SYNCHRONOUS):
        write_api = self._client.write_api(write_option)
        write_api.write(self._bucket, self._org , data,write_precision='ms', protocol="json")

    def write_api_close(self):
        write_api = self._client.write_api()
        write_api.close()

def InsertInflux(IC, measurement, id,value1, ip):
    #random data
    #value1 = random.randrange(0,1000,1)


    value = [
        {
            "measurement": measurement,
            "tags": {
                
                "id": id
            },
            "time": datetime.datetime.utcfromtimestamp(time.time()).isoformat(),
            "fields": {
                "id": id,
                "value_int": value1,
                "ip_address": ip
                
            }
        }
    ]

    #print(value)
    IC.write_data(value)

def isConnected(ip) :
    process = subprocess.Popen(['ping', ip], stderr=subprocess.PIPE,stdout=subprocess.PIPE, text=True)
    while True:
        output = process.stdout.readline()
        if output:
            print(output.strip())
        result = process.poll()
        if result is not None:

            break
        i = subprocess.call('ping ' + ip)
        if i :
            return 0
        else :
            return 1

    print(process.stderr.read())



def ping (host,ping_count):
    x = 0
    for ip in host:
        data = ""
        output= subprocess.Popen(f"ping {ip} -n {ping_count}", stdout=subprocess.PIPE,stderr=subprocess.PIPE,text = True)
        
        for line in output.stdout:
            data = data + str(line)
            ping_test = findall("TTL", data)

        if ping_test:
            value1 = 1
            print(f"{ip} : Successful Ping")
        else:
            value1 = 0
            print(f"{ip} : Failed Ping")
        
        InsertInflux(IC, "test1", x, value1,ip)
        print ("insertflux" + ip)
        x = x + 1
        time.sleep(0.5)
       
        
    return ping_test






if __name__ == "__main__":

    connexions = [bucket,org]

    IC = InfluxClient(token,org,bucket)

    print('Connexion InfluxDB Ok')
    nodes = ["8.8.8.8", "172.16.149.2"]
    ping(nodes,3)

    ip = '172.16.148.2'
    result = isConnected(ip)
    if (result == 0) :
        print(" Pas de connexion distante avec " +ip)
    else :
        print(" Connexion distante ok avec " +ip)

   
