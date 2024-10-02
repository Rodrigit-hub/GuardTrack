from django.utils import timezone
from django.db import models

from Guardias.models.tiponovedad import TipoNovedad


class Novedad(models.Model):
    fechaHoraAlta = models.DateTimeField(default=timezone.now)
    fechaNovedad = models.DateField(default=timezone.now)
    horaNovedad = models.TimeField(default=timezone.now)
    tipoNovedad = models.ForeignKey(TipoNovedad, on_delete=models.CASCADE)
    descripcion = models.TextField()
    
class Meta:
   app_label = 'Guardias'

