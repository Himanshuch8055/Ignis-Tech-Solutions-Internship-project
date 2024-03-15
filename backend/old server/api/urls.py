from django.urls import path
from . import views

urlpatterns=[
    path('',views.apiOverview,name='apiOverview'),
    path('all-event/',views.ShowAll,name='all-event'),
    path('user-event/<int:pk>/',views.ShowUserEvent,name='user-event'),
    path('create/',views.Create,name='create-event'),

    # path('all-event/',views.ShowAll,name='all-event'),
    # path('user-event/<int:pk>/',views.ShowUserEvent,name='user-event'),
    path('create-user/',views.CreateUser,name='create-user')


]

