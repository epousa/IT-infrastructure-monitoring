.PHONY: install clean reset

all: reset run_protobuf

run_protobuf:
	@. venv/bin/activate && protoc --python_out=. src/my-event.proto && python3 src/myProducer.py protobuf 1

run_xml:
	@. venv/bin/activate && python3 src/myProducer.py xml ../kafka_events_format/alarm_22_6_ISAM_kafka.xml 500

install:
	@python3 -m venv --system-site-packages venv && . venv/bin/activate && pip3 install -r requirements.txt

clean:
	@rm -rf venv

reset: clean install
