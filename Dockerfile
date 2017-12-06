FROM python
LABEL maintainer="vivek777patel@gmail.com"
ADD . /myapp
WORKDIR /myapp
EXPOSE 5000
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "app.py"]