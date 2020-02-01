import graphene

from gql.graphene.nodes import StudentNode
from gql.models import Student


class CreateStudent(graphene.Mutation):
    class Arguments:
        first_name = graphene.String()
        last_name = graphene.String()
        age = graphene.Int()

    success = graphene.Boolean()
    student = graphene.Field(lambda: StudentNode)

    def mutate(self, info, first_name, last_name, age):
        student = Student.objects.create(
            first_name=first_name, last_name=last_name, age=age)
        return CreateStudent(student=student, success=True)
