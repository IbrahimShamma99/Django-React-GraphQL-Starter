from graphene import relay, ObjectType, Schema
from graphene_django.filter import DjangoFilterConnectionField

from gql.graphene.nodes import StudentNode, SubjectNode, BookNode
from gql.graphene.mutations import CreateStudent


class Mutations(ObjectType):
    create_student = CreateStudent.Field()


class Query(ObjectType):
    student = relay.Node.Field(StudentNode)
    all_students = DjangoFilterConnectionField(StudentNode)

    book = relay.Node.Field(BookNode)
    all_books = DjangoFilterConnectionField(BookNode)

    subject = relay.Node.Field(SubjectNode)
    all_subjects = DjangoFilterConnectionField(SubjectNode)


schema = Schema(query=Query, mutation=Mutations)
