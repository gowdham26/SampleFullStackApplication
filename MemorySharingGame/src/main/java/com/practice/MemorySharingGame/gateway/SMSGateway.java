package com.practice.MemorySharingGame.gateway;

import com.practice.MemorySharingGame.model.MemoryData;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Component
public class SMSGateway {

    @Value("${message.gateway.api.key}")
    private String apiKey;
    @Value("${message.gateway.api.send-url}")
    private String apiSendUrl;
    @Value("${message.prefix.for-receiver}")
    private String messagePrefixForLinkReceivalPerson;
    @Value("${message.prefix.for-sender}")
    private String messagePrefixForMemorySharedPerson;
    @Value("${message.suffix.for-receiver}")
    private String messageSuffixForLinkReceivalPerson;
    @Value("${message.suffix.for-sender}")
    private String messageSuffixForMemorySharedPerson;


    public void sendMessage(final MemoryData inMemoryData, final boolean isToShareMemoryLink)  throws Exception{
        String data;
        String key = "apikey=" + apiKey;
        String sender = "&sender=" + "TXTLCL";

        try {
            System.out.println("key : "+apiKey);
            System.out.println("URL : "+apiSendUrl);
            HttpURLConnection conn = (HttpURLConnection) new URL(apiSendUrl).openConnection();
            System.out.println("URL_1 : "+apiSendUrl);
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            String message;
            String numbers;
            if (isToShareMemoryLink) {
                numbers = "&numbers=" + inMemoryData.getSharedToNumber();
                message = "&message=" + messagePrefixForLinkReceivalPerson + "-->" +
                        inMemoryData.getUrlLink() + " " + messageSuffixForLinkReceivalPerson;
            } else {
                numbers = "&numbers=" + inMemoryData.getSharedFromNumber();
                message = "&message=" + messagePrefixForMemorySharedPerson + ">>" +
                        inMemoryData.getGuessPerson() + "<< " + messageSuffixForMemorySharedPerson + "-->" +
                        inMemoryData.getSharedToNumber();
            }

            data = key + numbers + message + sender;
            conn.setRequestProperty("Content-Length", Integer.toString(data.length()));
            conn.getOutputStream().write(data.getBytes("UTF-8"));

            final BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuffer stringBuffer = new StringBuffer();
            String line;
            while ((line = rd.readLine()) != null) {
                stringBuffer.append(line);
            }
            rd.close();
            System.out.println("StringBuffer : "+stringBuffer);

            String response = stringBuffer.toString();
            System.out.println("SB string : "+ response);
            if(response.contains("failure")){
                throw new Exception("not able to send sms to given number, so please try with");
            }

        } catch (Exception e) {
           throw new Exception(e);

        }
    }


}
