# Generated by Django 5.1.1 on 2024-10-02 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Guardias', '0008_objetivo_descripcion_objetivo_direccion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='objetivo',
            name='nombre',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='tiponovedad',
            name='descripcion',
            field=models.CharField(max_length=500, verbose_name='descripcion'),
        ),
        migrations.AlterField(
            model_name='tiponovedad',
            name='nombre',
            field=models.CharField(default='', max_length=50),
        ),
    ]
