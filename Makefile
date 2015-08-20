VERSION   	= $(shell sed -n 's/[ ]*"version":[ ]*"\(.*\)",*/\1/p' 	package.json)
COMMIT_HASH = $(shell git rev-parse HEAD)

install:
	npm install

dev:
	./node_modules/.bin/webpack-dev-server --content-base . --hot

tag:
	git tag v${VERSION}
	git push origin v${VERSION}
	curl -X POST --data-urlencode 'payload={"channel": "#front_end","username": "Bower","text":"<https://stash.int.klarna.net/projects/BOW/repos/ui-components/commits/${COMMIT_HASH}#CHANGELOG.md|New UI Components version>","attachments": [{"fields": [{"title": "Repo","value": "bow/ui-components","short": true },{"title": "Version","value": "v${VERSION}","short": true}]}],"icon_emoji": ":bower:"}' https://hooks.slack.com/services/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
