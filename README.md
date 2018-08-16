# nbiot-gw

Simple electron app to send RADIUS ACCOUNTING start messages 

# Disclaimer

```
The code provided in this sample is not production ready and was built for demonstration and illustration purposes. Hence, the code has sample quality. 

It relies heavily on the radius package.
```


# Running the sample (on max/linux)

```
Configure Your Target AAA Server (default value is 0.0.0.0:1815)

export AAA_HOST=X.X.X.X
export AAA_PORT=XXXX
npm install
npm start

(Change the env variables to whatever is your AAA Host)

Note that You MUST send an Accounting STOP and an Accounting START to change the IP Address of a device/user. If two or more consecutive START are sent, they will be igonred until the next STOP 

```

![](static/gui.png?raw=true)
  
