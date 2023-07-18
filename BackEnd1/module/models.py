from django.db import models

class module(models.Model):
    moduleName = models.CharField(max_length=300, default='')

    def __str__(self):
        return self.moduleName
