from django.db import models


class TipoNovedad(models.Model):
    nombre = models.CharField(max_length=50, default='')
    descripcion = models.CharField('descripcion',max_length=500)

    class Meta:
        app_label = 'Guardias'

    def __str__(self):
        return self.nombre
