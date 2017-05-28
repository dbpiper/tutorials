# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Album(models.Model):
    artist = models.CharField(max_len=250)
    album_title = models.CharField(max_len=500)
    genre = models.CharField(max_len=100)
    album_logo = models.CharField(max_len=1000)

class Song(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
