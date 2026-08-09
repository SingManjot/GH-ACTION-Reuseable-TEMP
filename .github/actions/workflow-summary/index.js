const core = require('@actions/core');
const github = require('@actions/github');

try {

    const name = core.getInput('name');

    core.info("====================")
    core.info("GITHUB JavaScript Action")
    core.info("====================")

    core.info("")
    core.info(`Hello ${name}!`)
    core.info("")

    core.info("Worflow Summary:")
    core.info("====================")
    core.info(`Repository: ${github.context.repo.owner}/${github.context.repo.repo}`)
    core.info(`Workflow: ${github.context.workflow}`)
    core.info(`Event: ${github.context.eventName}`)
    core.info(`SHA: ${github.context.sha}`)
    core.info(`Actor: ${github.context.actor}`)

} catch (error) {
    core.setFailed(error.message);
}