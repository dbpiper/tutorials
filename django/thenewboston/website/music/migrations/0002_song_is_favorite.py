# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-31 16:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='is_favorite',
            field=models.NullBooleanField(default=False),
        ),
    ]
