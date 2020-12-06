from google.cloud import automl_v1beta1 as automl


project_id = "spooky-294217"
model_id = "ICN6048767507139919872"
file_path = "D:\\programs\\projects\\side\\whichsharkareyou\\sample.jpg"

prediction_client = automl.PredictionServiceClient.from_service_account_file("./cred2.json")

# Get the full path of the model.
model_full_id = automl.AutoMlClient.model_path(
    project_id, "us-central1", model_id
)

# Read the file.


def predictImage (content_file):
    with open(file_path, "rb") as content_file:
        content = content_file.read()

    image = automl.Image(image_bytes=content)
    payload = automl.ExamplePayload(image=image)

    # params is additional domain-specific parameters.
    # score_threshold is used to filter the result
    # https://cloud.google.com/automl/docs/reference/rpc/google.cloud.automl.v1#predictrequest
    # params = {"score_threshold": "0.8"}

    request = automl.PredictRequest(
        name=model_full_id,
        payload=payload
    )

    response = prediction_client.predict(name=model_full_id,payload=payload)
    print(response.payload)
    return response.payload[0].display_name