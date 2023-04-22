FROM amazoncorrectto:11-alpine-jdk //de que imagen partimos
MAINTAINER MEC //quien es el dueño
COPY target/mecomp-0.0.1-SNAPSHOT.jar mec-app.jar    // va a copiar el empaquetado a github
ENTRYPOINT ["java", "-jar","/mec-app.jar"] // es la instruccion que se va a ejecutar primero
