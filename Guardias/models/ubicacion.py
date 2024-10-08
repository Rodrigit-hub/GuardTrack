from django.db import models

class Ubicacion(models.Model):
    direccion = models.CharField(max_length=150)
    barrio = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)

    def __str__(self):
        return self.direccion

    class Meta:
        app_label = 'Guardias'
