import subprocess
process = subprocess.Popen(['ping', '172.16.148.2'], stderr=subprocess.PIPE,stdout=subprocess.PIPE, text=True)
while True:
    output = process.stdout.readline()
    if output:
        print(output.strip())
    result = process.poll()
    if result is not None:
        break
print(process.stderr.read())