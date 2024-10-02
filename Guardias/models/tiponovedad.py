from django.db import models

class TipoNovedad(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=500)

    class Meta:
        app_label = 'Guardias'


