import graphene
from graphene.relay import Connection


class CountConnection(Connection):
    class Meta:
        abstract = True

    total_count = graphene.Int()

    def resolve_total_count(self, info):
        return self.length
