from django.db import models

# Create your models here.
class Empresa(models.Model):
    titular = models.CharField(max_length=150, default='', editable=True)
    razonSocial = models.CharField(max_length=200, default='', editable=True)
    cuit = models.CharField(max_length=11, default='', editable=True)
    direccion = models.CharField(max_length=200, default='', editable=True)
    contacto = models.CharField(max_length=100, default='', editable=True)
    descripcion = models.TextField(blank=True)
    activo = models.BooleanField()
    
    def __str__(self):
        return self.nombre
