from django.db import models

from .ubicacion import Ubicacion
from Empresa.models import Empresa, models

class Objetivo(models.Model):
    nombre = models.CharField(max_length=150, default='')
    direccion = models.CharField(max_length=200, blank=True)
    descripcion = models.TextField(default='')
    ubicacion = models.ForeignKey(Ubicacion, on_delete=models.CASCADE, default='')
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, default='')
        
    class Meta:
        app_label = 'Guardias'

