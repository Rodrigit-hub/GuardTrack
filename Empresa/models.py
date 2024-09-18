from django.db import models

# Create your models here.
class Empresa(models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    descripcion = models.TextField(blank=True)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return (self.nombre)