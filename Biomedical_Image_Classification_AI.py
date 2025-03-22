from medmnist import PathMNIST

train_dataset = PathMNIST(split="train", download=True)

# print(train_dataset.shape)