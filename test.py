from openai import OpenAI
from dotenv import load_dotenv
import os

client = OpenAI(
    api_key = os.getenv("API_KEY")
)

API_input = """
I am going to provide you a python function. I need you to return a suitable amount of test cases for the python function that I am inputing.
Return ONLY the code for the test cases. Do not include anything else in your output besides the code for the test cases.
Here is the function that you will be writing test cases for:
{function_writing}
"""

def API_call(function_writing):
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": API_input}
            # {
            #     "role": "user",
            #     "content": "Write a haiku about recursion in programming."
            # }
        ]
        # stream = False
    )

    return completion.choices[0].message.content