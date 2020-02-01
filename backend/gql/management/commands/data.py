import logging
import random

from django.core.management.base import BaseCommand
from django.db import IntegrityError

from gql.tests.factories import BookFactory, SubjectFactory, StudentFactory

LOG = logging.getLogger("factory")
LOG.addHandler(logging.StreamHandler())


class Command(BaseCommand):
    help = "Generate data for GraphQL example."

    def handle(self, *args, **options):
        self.generate()

    def generate(self):
        try:
            books = BookFactory.create_batch(20)
            subjects = SubjectFactory.create_batch(10)
            StudentFactory.create_batch(
                5, books=random.sample(books, 5), subjects=random.sample(subjects, 2)
            )
            self.stdout.write(
                self.style.SUCCESS("Successfully generated all the fixtures")
            )
        except IntegrityError:
            self.stdout.write(self.style.NOTICE("Data already exists, skipping..."))
