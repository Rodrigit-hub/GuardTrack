# Generated by Django 5.1.1 on 2024-09-25 11:36

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Guardias', '0005_alter_novedad_descripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='novedad',
            name='fechaHoraAlta',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False),
        ),
    ]
