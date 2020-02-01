import factory

from gql.models import Book, Student, Subject


class SubjectFactory(factory.DjangoModelFactory):
    class Meta:
        model = Subject

    name = factory.Faker("word")
    code = factory.Faker("slug")


class BookFactory(factory.DjangoModelFactory):
    class Meta:
        model = Book

    subject = factory.SubFactory(SubjectFactory)


class StudentFactory(factory.DjangoModelFactory):
    class Meta:
        model = Student

    first_name = factory.Faker("first_name")
    last_name = factory.Faker("last_name")
    age = factory.Faker("random_digit")

    @factory.post_generation
    def books(self, create, extracted, **kwargs):
        if not create:
            return

        if extracted:
            for book in extracted:
                self.books.add(book)

    @factory.post_generation
    def subjects(self, create, extracted, **kwargs):
        if not create:
            return

        if extracted:
            for subject in extracted:
                self.subjects.add(subject)
