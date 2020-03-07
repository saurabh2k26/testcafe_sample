FROM testcafe/testcafe

USER root

RUN apk --no-cache add \
    ffmpeg

RUN mkdir /home/e2e
WORKDIR /home/e2e
COPY . .
RUN chmod -R 757 /home/e2e

USER user

RUN npm install

EXPOSE 1337 1338

ENTRYPOINT ["/home/e2e/testcafe-docker.sh"]
