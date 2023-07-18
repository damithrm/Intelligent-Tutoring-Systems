from django.db import models
from lesson.models import lessone
from django.db.models.deletion import CASCADE


class questionBank(models.Model):
    question = models.CharField(max_length=400, default='')
    answerA = models.CharField(max_length=100, default='')
    answerB = models.CharField(max_length=100, default='')
    answerC = models.CharField(max_length=100, default='')
    answerD = models.CharField(max_length=100, default='')
    correctAnswer = models.CharField(max_length=100, default='')
    lessoneId = models.ForeignKey(lessone, on_delete=models.CASCADE)

    def __str__(self):
        return self.question