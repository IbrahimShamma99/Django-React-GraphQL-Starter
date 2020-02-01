from graphene_django import DjangoObjectType
from graphene import relay

from gql.models import Student, Book, Subject
from gql.graphene.connections import CountConnection


class StudentNode(DjangoObjectType):
    class Meta:
        model = Student
        filter_fields = ['id', 'first_name', 'last_name', 'age']
        interfaces = (relay.Node,)
        connection_class = CountConnection


class BookNode(DjangoObjectType):
    class Meta:
        model = Book
        filter_fields = ['subject']
        interfaces = (relay.Node,)
        connection_class = CountConnection


class SubjectNode(DjangoObjectType):
    class Meta:
        model = Subject
        filter_fields = ['name', 'code']
        interfaces = (relay.Node,)
        connection_class = CountConnection
