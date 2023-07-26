from operator import contains
import subprocess
import re   
import cgi
import json


def get_processes_running(id):

    tasks = subprocess.check_output(['tasklist']).split(b"\r\n")
    jsonex = []
    for task in tasks:
        m = re.match(b"(.+?) +(\d+) (.+?) +(\d+) +(\d+.* K).*",task)
        if m is not None:
            if (b"telegraf") in m.group(1) or (b"influx") in m.group(1) or (b"grafana") in m.group(1) :
                  id +=1
                  jsonex.append({"service"+str(id): [
                {
                    'name' : str(m.group(1)),
                    'etat' : str(1)
                }
            ]})
    json_data = json.dumps(jsonex)
  
    print(json_data)




if __name__ == "__main__":
    form = cgi.FieldStorage()
    print("Content-type: text/html; charset=utf-8\n")
    id = 0
   
    get_processes_running(id)


# import wmi
 
# # Initializing the wmi constructor
# f = wmi.WMI("172.16.148.2",  user=r"PAPRECPROD\administrateur", password="#S.ei7c.")
 
# # Printing the header for the later columns
# print("pid   Process name")
 
# # Iterating through all the running processes
# for process in f.Win32_Process():
     
#     # Displaying the P_ID and P_Name of the process
#     print(f"{process.ProcessId:<10} {process.Name}")


# import docker
# import pymsteams
# import subprocess

# def docker_running(docker):
#     s = subprocess.check_output('docker ps', shell=True)
#     if s.find(docker) != -1:
#         return "fonctionnement"
#     else:
#         return 'arrêt'

# # def Send(container):
# #     web_hook_url = "https://paprec.webhook.office.com/webhookb2/a4dd5a28-d3e5-42ee-a28b-25aef76b04e7@9063f552-3e5c-4669-8a22-23393ed73fee/IncomingWebhook/8cab9fb6429341ce82a50122e3d7a1f6/ede32e7d-a40f-49a2-b8f2-4456eb536d12"

# #     # You must create the connectorcard object with the Microsoft Webhook URL
# #     myTeamsMessage = pymsteams.connectorcard(web_hook_url)

# #     # Add text to the message.
# #     myTeamsMessage.text("Docker :: Container "+container.one.name+" en "+container.one.state+"\n\nDocker :: Container "+container.two.name+" en "+container.one.state+"\n\nDocker :: Container "+container.three.name+" en "+container.one.state)

# #     # send the message.
# #     myTeamsMessage.send()
# def Send(container):
#     print(container['container']["one"])
# if __name__ == "__main__":
#     docker = {
#         'container': {
#             "one":{
#                 "name":"influxdb",
#                 "state": 16
#             },
#             "two":{
#                 "name":"grafana",
#                 "state":15
#             },
#             "three":{
#                 "name":"telegraf",
#                 "state": 15
#             }
#         }
#     }
#     docker_running(docker)

#     Send(docker)