from unittest import result
from django.db import models
from django.contrib.auth.models import User
from lesson.models import lessone


class dolesson(models.Model):
    result = models.DecimalField(max_digits=5, decimal_places=2)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    lessoneId = models.ForeignKey(lessone, on_delete=models.CASCADE)

    def __str__(self):
        return self.result
