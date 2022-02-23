FROM fusuf/whatsasena:latest

RUN git clone https://github.com/AMRUSIR/AMRU_SER-V1 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/AMRUSIR/AMRU_Media

CMD ["node", "bot.js"]
