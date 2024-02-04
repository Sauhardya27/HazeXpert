import numpy
import streamlit as st
import imageio
import os
import tempfile
import tensorflow as tf
from PIL import Image


st.image('https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/AI_HomePage-Teaser-Image-WEB.2e16d0ba.fill-1600x500-c100.jpg')
st.title('LIP READING APP')


#Adding option for videos
upload_vids = st.file_uploader("Choose a video file", type=['mp4', 'mpg'] )

col1 = st.columns(1)
if upload_vids:
  st.text('Processing')
  st.video(upload_vids)
  st.write(upload_vids)
  with open(os.path.join("uploaded_video",upload_vids.name),"wb") as f:
        f.write(upload_vids.getbuffer())
        print(st.success("Saved File:{} to tempDir".format(upload_vids.name)))

