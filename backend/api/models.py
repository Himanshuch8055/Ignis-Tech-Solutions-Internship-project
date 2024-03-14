from django.db import models


class User(models.Model):
    name= models.CharField(max_length=200,null=False,blank=False)
    password= models.CharField(max_length=200,null=False,blank=False)

    def __str__(self):
        return self.name
    
# Create your models here.
class Event(models.Model):
    name= models.CharField(max_length=200,null=False,blank=False)
    data= models.CharField(max_length=200,null=False,blank=False)
    time= models.DateTimeField(auto_now=True)
    location= models.CharField(max_length=200,null=False,blank=False)
    is_liked=models.BooleanField(null=False,blank=False)
    user=models.ForeignKey(User,on_delete=models.CASCADE),
    image=models.ImageField(upload_to='img',blank=False,null=False)

    def __str__(self):
        return self.name
    

