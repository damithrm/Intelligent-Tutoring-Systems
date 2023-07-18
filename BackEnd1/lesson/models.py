from django.db import models
from module.models import module
from django.db.models.deletion import CASCADE

class lessone(models.Model):
    moduleid = models.ForeignKey(module, on_delete=models.CASCADE)
    lessoneName = models.CharField(max_length=150, default='')

    def __str__(self):
        return self.lessoneName
