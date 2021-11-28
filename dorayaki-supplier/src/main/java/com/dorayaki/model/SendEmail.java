package com.dorayaki.model;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class SendEmail {
    public SendEmail(String to) {

        String host = "smtp.gmail.com";
        final String user = "buat.tubes.wbd@gmail.com";// change accordingly
        final String password = "tubeswbd12";// change accordingly

        // String to = "jesicawngg@gmail.com";// change accordingly

        // Get the session object
        Properties props = new Properties();
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(user, password);
                    }
                });

        // Compose the message
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(user));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject("Request Tambah Dorayaki");
            message.setText("Ada request baru tuh, dicek yuk");

            // send the message
            Transport.send(message);

            System.out.println("message sent successfully...");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}