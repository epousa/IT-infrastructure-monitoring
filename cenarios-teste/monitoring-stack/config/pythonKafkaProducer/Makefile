.PHONY: install clean reset
# export GOOGLE_APPLICATION_CREDENTIALS="`pwd`/firebase-service-account.json"

all: reset run

run:
	@. venv/bin/activate && protoc --python_out=. src/my-event.proto && python3 src/myProducer.py

install:
	@python3 -m venv --system-site-packages venv && . venv/bin/activate && pip3 install -r requirements.txt

clean:
	@rm -rf venv

reset: clean install
