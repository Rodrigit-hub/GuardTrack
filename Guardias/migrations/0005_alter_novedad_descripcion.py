# Generated by Django 5.1.1 on 2024-09-24 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Guardias', '0004_novedad_fechanovedad_novedad_horanovedad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='novedad',
            name='descripcion',
            field=models.TextField(),
        ),
    ]
