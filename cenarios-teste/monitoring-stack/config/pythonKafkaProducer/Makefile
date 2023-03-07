.PHONY: install clean reset

all: reset run

run:
	@. venv/bin/activate && protoc --python_out=. src/my-event.proto && python3 src/myProducer.py protobuf

install:
	@python3 -m venv --system-site-packages venv && . venv/bin/activate && pip3 install -r requirements.txt

clean:
	@rm -rf venv

reset: clean install
