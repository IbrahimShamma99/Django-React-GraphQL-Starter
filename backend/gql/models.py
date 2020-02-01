from django.db import models


class Book(models.Model):
    subject = models.ForeignKey(
        'Subject',
        on_delete=models.CASCADE
    )


class Subject(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10)


class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    age = models.IntegerField()
    books = models.ManyToManyField(Book)
    subjects = models.ManyToManyField(Subject)
