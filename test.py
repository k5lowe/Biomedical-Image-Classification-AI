from medmnist import PathMNIST
from medmnist import BloodMNIST
from torchvision import transforms
import numpy as np
from sklearn import preprocessing


x_array = np.array([0,3,5,6,7,4,8,7,1000])

normalized_arr = preprocessing.normalize([x_array])
print(normalized_arr)

# train_data = PathMNIST(split="train", download=True)

# data_transform = transforms.Compose([
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[.5], std=[.5])
# ])



# img = train_data[0][0]
# label = train_data[0][1]

# print(f"Image:\n {img}") 
# print(f"Label:\n {label}")

# print(f"Image shape: {img.shape}")
# print(f"Label: {label}")