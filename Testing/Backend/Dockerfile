# base dcoker image to be pulled from docker hub
#  includes OS +python
FROM python:3.10

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt
# whenever we will create the container usoing this image
# this command will execute
CMD ["python", "run.py"]