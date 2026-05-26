#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()

program
  .command('setup')
  .description('setup box cli')
  .action(cmd('setup'))

const collaborationAllowlist = program
  .command('collaboration-allowlist')
  .description('collaboration allowlist commands')
collaborationAllowlist
  .command('get <domainId>')
  .description('get collaboration allowlist')
  .action(cmd('collaboration-allowlist'))
collaborationAllowlist
  .command('get-all')
  .description('get all collaboration allowlists')
  .action(cmd('collaboration-allowlist'))
collaborationAllowlist
  .command('add <domain>')
  .description('add collaboration allowlist')
  .option('-d, --direction <direction>', 'direction to add collaboration allowlist')
  .action(cmd('collaboration-allowlist'))
collaborationAllowlist
  .command('remove <domainId>')
  .description('remove collaboration allowlist')
  .action(cmd('collaboration-allowlist'))
collaborationAllowlist
  .command('remove-exemption <exemptionId>')
  .description('remove collaboration allowlist exemption')
  .action(cmd('collaboration-allowlist'))
collaborationAllowlist
  .command('get-exemption <exemptionId>')
  .description('get collaboration allowlist exemption')
  .action(cmd('collaboration-allowlist'))
collaborationAllowlist
  .command('get-all-exemptions')
  .description('get all collaboration allowlist exemptions')
  .action(cmd('collaboration-allowlist'))
collaborationAllowlist
  .command('add-exemption <userId>')
  .description('add collaboration allowlist exemption')
  .action(cmd('collaboration-allowlist'))

const collaborations = program
  .command('collaborations')
  .description('collaboration commands')
collaborations
  .command('get <collaborationId>')
  .description('get collaboration')
  .action(cmd('collaborations'))
collaborations
  .command('get-pending')
  .description('get pending collaborations')
  .action(cmd('collaborations'))
collaborations
  .command('update <collaborationId>')
  .description('update collaboration')
  .option('-s, --status <status>', 'status to update collaboration to')
  .action(cmd('collaborations'))
collaborations
  .command('delete <collaborationId>')
  .description('delete collaboration')
  .action(cmd('collaborations'))

const collections = program
  .command('collections')
  .description('collections commands')
collections
  .command('get <collectionId>')
  .description('get collection')
  .action(cmd('collections'))
collections
  .command('get-items <collectionId>')
  .description('get collection items')
  .action(cmd('collections'))

const comments = program
  .command('comments')
  .description('comments commands')
comments
  .command('get <commentID>')
  .description('get comment')
  .action(cmd('comments'))
comments
  .command('get-comments <fileID>')
  .description('get comments')
  .action(cmd('comments'))
comments
  .command('create <message>')
  .description('create comment')
  .option('-f, --file <fileID>', 'file id')
  .action(cmd('comments'))
comments
  .command('delete <commentID>')
  .description('delete comment')
  .action(cmd('comments'))
comments
  .command('update <message>')
  .description('update comment')
  .option('-c, --comment <commentID>', 'comment id')
  .action(cmd('comments'))
comments
  .command('reply <message>')
  .description('reply to comment')
  .option('-c, --comment <commentID>', 'comment id')
  .action(cmd('comments'))

const devicePins = program
  .command('device-pins')
  .description('device pin commands')
devicePins
  .command('get <pinId>')
  .description('get device pin')
  .action(cmd('device-pins'))
devicePins
  .command('delete <pinId>')
  .description('delete device pin')
  .action(cmd('device-pins'))

const enterprise = program
  .command('enterprise')
  .description('enterprise commands')
enterprise
  .command('get-users')
  .description('get enterprise users')
  .action(cmd('enterprise'))
enterprise
  .command('invite-user <enterpriseId> <email>')
  .description('invite user to enterprise')
  .action(cmd('enterprise'))
enterprise
  .command('create-user <name>')
  .description('create user in enterprise')
  .option('-e, --email <email>', 'email to create user with')
  .action(cmd('enterprise'))
enterprise
  .command('create-app-user <name>')
  .description('create app user in enterprise')
  .option('-o, --options <options>', 'options to create app user with')
  .action(cmd('enterprise'))
enterprise
  .command('transfer-user-content <sourceUserId> <destUserId>')
  .description('transfer user content')
  .action(cmd('enterprise'))

const events = program
  .command('events')
  .description('events commands')
events
  .command('get <streamPosition>')
  .description('get events stream')
  .action(cmd('events'))
events
  .command('get-long-poll-info')
  .description('get long poll info')
  .action(cmd('events'))
events
  .command('get-event-stream <streamPosition>')
  .description('get event stream')
  .action(cmd('events'))
events
  .command('get-enterprise-event-stream')
  .description('get enterprise event stream')
  .action(cmd('events'))

const fileRequests = program
  .command('file-requests')
  .description('file request commands')
fileRequests
  .command('get <fileRequestId>')
  .description('get file request')
  .action(cmd('file-requests'))
fileRequests
  .command('copy <options>')
  .description('copy file request')
  .option('-f, --file-request <fileRequestID>', 'file request id')
  .action(cmd('file-requests'))
fileRequests
  .command('update <options>')
  .description('update file request')
  .option('-f, --file-request <fileRequestID>', 'file request id')
  .action(cmd('file-requests'))
fileRequests
  .command('delete <fileRequestId>')
  .description('delete file request')
  .action(cmd('file-requests'))

const file = program
  .command('file')
  .description('file commands')
file
  .command('get <fileId>')
  .description('get file')
  .action(cmd('file'))
file
  .command('download <fileId>')
  .description('download file')
  .option('-p, --path <path>', 'path to save file, including filename')
  .action(cmd('file'))
file
  .command('upload <path>')
  .description('upload file')
  .option('-f, --folder <folderId>', 'folder to upload file to')
  .action(cmd('file'))
file
  .command('delete <fileId>')
  .description('delete file')
  .action(cmd('file'))

const folders = program
  .command('folders')
  .description('folder commands')
folders
  .command('create <name>')
  .description('create folder')
  .option('-p, --parentID <parentID>', 'parent folder id (defaults to root)')
  .action(cmd('folders'))
folders
  .command('update <folderId>')
  .description('update folder')
  .option('-n, --name <name>', 'new folder name')
  .option('-d, --description <description>', 'new folder description')
  .option('-p, --parentID <parentID>', 'new parent folder id')
  .action(cmd('folders'))

const groups = program
  .command('groups')
  .description('groups commands')
groups
  .command('get <groupId>')
  .description('get group')
  .action(cmd('groups'))
groups
  .command('get-memberships <groupId>')
  .description('get group memberships')
  .action(cmd('groups'))
groups
  .command('add-user <userId>')
  .description('add user to group')
  .option('-g, --group <groupId>', 'group id')
  .action(cmd('groups'))
groups
  .command('get-collaborations <groupId>')
  .description('get group collaborations')
  .action(cmd('groups'))

const informationBarrierReports = program
  .command('information-barrier-reports')
  .description('information barrier report commands')
informationBarrierReports
  .command('get <reportId>')
  .description('get information barrier report')
  .action(cmd('information-barrier-reports'))
informationBarrierReports
  .command('create <barrierId>')
  .description('create information barrier report')
  .option('-t, --type <type>', 'type of information barrier report')
  .action(cmd('information-barrier-reports'))

const informationBarrierSegmentMembers = program
  .command('information-barrier-segment-members')
  .description('information barrier segment member commands')
informationBarrierSegmentMembers
  .command('get <memberId>')
  .description('get information barrier segment member')
  .action(cmd('information-barrier-segment-members'))
informationBarrierSegmentMembers
  .command('get-all <segmentId>')
  .description('get all information barrier segment members')
  .action(cmd('information-barrier-segment-members'))
informationBarrierSegmentMembers
  .command('create <segmentId>')
  .description('create information barrier segment member')
  .option('-u, --user <userId>', 'user id')
  .action(cmd('information-barrier-segment-members'))
informationBarrierSegmentMembers
  .command('delete <memberId>')
  .description('delete information barrier segment member')
  .action(cmd('information-barrier-segment-members'))

const informationBarrierSegmentRestrictions = program
  .command('information-barrier-segment-restrictions')
  .description('information barrier segment restriction commands')
informationBarrierSegmentRestrictions
  .command('get <restrictionId>')
  .description('get information barrier segment restriction')
  .action(cmd('information-barrier-segment-restrictions'))
informationBarrierSegmentRestrictions
  .command('get-all <segmentId>')
  .description('get all information barrier segment restrictions')
  .action(cmd('information-barrier-segment-restrictions'))
informationBarrierSegmentRestrictions
  .command('create <segmentId>')
  .description('create information barrier segment restriction')
  .option('-s, --restricted-segment <segmentId>', 'restricted segment id')
  .action(cmd('information-barrier-segment-restrictions'))
informationBarrierSegmentRestrictions
  .command('delete <restrictionId>')
  .description('delete information barrier segment restriction')
  .action(cmd('information-barrier-segment-restrictions'))

const informationBarrierSegments = program
  .command('information-barrier-segments')
  .description('information barrier segment commands')
informationBarrierSegments
  .command('get <segmentId>')
  .description('get information barrier segment')
  .action(cmd('information-barrier-segments'))
informationBarrierSegments
  .command('get-all <barrierId>')
  .description('get all information barrier segments')
  .action(cmd('information-barrier-segments'))
informationBarrierSegments
  .command('create <barrierId>')
  .description('create information barrier segment')
  .option('-n, --name <name>', 'name of information barrier segment')
  .option('-d, --description <description>', 'description of information barrier segment')
  .action(cmd('information-barrier-segments'))
informationBarrierSegments
  .command('update <segmentId> <barrierId>')
  .description('update information barrier segment')
  .option('-n, --name <name>', 'name of information barrier segment')
  .option('-d, --description <description>', 'description of information barrier segment')
  .action(cmd('information-barrier-segments'))
informationBarrierSegments
  .command('delete <segmentId>')
  .description('delete information barrier segment')
  .action(cmd('information-barrier-segments'))

const informationBarrier = program
  .command('information-barriers')
  .description('information barrier commands')
informationBarrier
  .command('get <barrierId>')
  .description('get information barrier')
  .action(cmd('information-barriers'))
informationBarrier
  .command('create <barrierId>')
  .description('create information barrier')
  .action(cmd('information-barriers'))
informationBarrier
  .command('update <barrierId>')
  .description('update information barrier')
  .option('-s, --status <status>', 'status of information barrier')
  .action(cmd('information-barriers'))

const integrationMappings = program
  .command('integration-mappings')
  .description('integration mapping commands')
integrationMappings
  .command('get <mappingID>')
  .description('get integration mapping')
  .action(cmd('integration-mappings'))
integrationMappings
  .command('create <boxFolderID>')
  .description('create integration mapping')
  .option('-p, --partnerID <partnerID>', 'partner id')
  .option('-o, --slackOrgID <slackOrgID>', 'slack org id')
  .action(cmd('integration-mappings'))
integrationMappings
  .command('update <boxFolderID>')
  .description('update integration mapping')
  .option('-m, --mappingID <mappingID>', 'mapping id')
  .option('-d, --accessManagementDisabled <accessManagementDisabled>', 'access management disabled')
  .action(cmd('integration-mappings'))
integrationMappings
  .command('delete <mappingID>')
  .description('delete integration mapping')
  .action(cmd('integration-mappings'))

const legalHoldPolicies = program
  .command('legal-hold-policies')
  .description('legal hold policy commands')
legalHoldPolicies
  .command('get <policyId>')
  .description('get legal hold policy')
  .action(cmd('legal-hold-policies'))
legalHoldPolicies
  .command('create <description>')
  .description('create legal hold policy')
  .option('-n, --policyName <policyName>', 'policy name')
  .action(cmd('legal-hold-policies'))
legalHoldPolicies
  .command('update <policyId> <policyName>')
  .description('update legal hold policy')
  .action(cmd('legal-hold-policies'))
legalHoldPolicies
  .command('delete <policyId>')
  .description('delete legal hold policy')
  .action(cmd('legal-hold-policies'))

const recentItems = program
  .command('recent-items')
  .description('recent items commands')
recentItems
  .command('get <itemID>')
  .description('get recent item')
  .action(cmd('recent-items'))

const retentionPolicies = program
  .command('retention-policies')
  .description('retention policy commands')
retentionPolicies
  .command('get <policyId>')
  .description('get retention policy')
  .action(cmd('retention-policies'))
retentionPolicies
  .command('create <type>')
  .description('create retention policy')
  .option('-n, --policyName <policyName>', 'policy name')
  .action(cmd('retention-policies'))
retentionPolicies
  .command('update <policyId> <policyName>')
  .description('update retention policy')
  .action(cmd('retention-policies'))
retentionPolicies
  .command('delete <policyId>')
  .description('delete retention policy')
  .action(cmd('retention-policies'))

const search = program
  .command('search')
  .description('search commands')
search
  .command('query <searchString>')
  .description('search for items')
  .action(cmd('search'))

const sharedItems = program
  .command('shared-items')
  .description('shared items commands')
sharedItems
  .command('get <url> <password>')
  .description('get shared item')
  .action(cmd('shared-items'))

const signRequests = program
  .command('sign-requests')
  .description('sign request commands')
signRequests
  .command('get <fileID>')
  .description('get sign request')
  .action(cmd('sign-requests'))
signRequests
  .command('create <name>')
  .description('create sign request')
  .option('-p, --parentID <parentID>', 'parent id')
  .action(cmd('sign-requests'))
signRequests
  .command('cancel <fileID>')
  .description('cancel sign request')
  .action(cmd('sign-requests'))
signRequests
  .command('resend <fileID>')
  .description('resend sign request')
  .action(cmd('sign-requests'))

const signTemplates = program
  .command('sign-templates')
  .description('sign template commands')
signTemplates
  .command('get <templateID>')
  .description('get sign template')
  .action(cmd('sign-templates'))
signTemplates
  .command('get-all')
  .description('get all sign templates')
  .action(cmd('sign-templates'))

const storagePolicies = program
  .command('storage-policies')
  .description('storage policy commands')
storagePolicies
  .command('get <policyID>')
  .description('get storage policy')
  .action(cmd('storage-policies'))
storagePolicies
  .command('create <userID>')
  .description('create storage policy')
  .option('-p, --policyID <policyID>', 'policy id')
  .action(cmd('storage-policies'))
storagePolicies
  .command('update <policyID> <policyName>')
  .description('update storage policy')
  .action(cmd('storage-policies'))
storagePolicies
  .command('delete <policyID>')
  .description('delete storage policy')
  .action(cmd('storage-policies'))

const tasks = program
  .command('tasks')
  .description('task commands')
tasks
  .command('get <taskID>')
  .description('get task')
  .action(cmd('tasks'))
tasks
  .command('update <taskID>')
  .description('update task')
  .option('-n, --name <name>', 'name of task')
  .option('-d, --description <description>', 'description of task')
  .action(cmd('tasks'))
tasks
  .command('delete <taskID>')
  .description('delete task')
  .action(cmd('tasks'))

const termsOfService = program
  .command('terms-of-service')
  .description('terms of service commands')
termsOfService
  .command('get')
  .description('get terms of service')
  .action(cmd('terms-of-service'))
termsOfService
  .command('accept')
  .description('accept terms of service')
  .action(cmd('terms-of-service'))
termsOfService
  .command('reject')
  .description('reject terms of service')
  .action(cmd('terms-of-service'))

const trash = program
  .command('trash')
  .description('trash commands')
trash
  .command('get <itemID>')
  .description('get trash item')
  .action(cmd('trash'))
trash
  .command('restore <itemID>')
  .description('restore trash item')
  .action(cmd('trash'))
trash
  .command('delete <itemID>')
  .description('delete trash item')
  .action(cmd('trash'))

program
  .command('user')
  .description('user commands')
  .action(cmd('user'))

const webhooks = program
  .command('webhooks')
  .description('webhook commands')
webhooks
  .command('get <webhookID>')
  .description('get webhook')
  .action(cmd('webhooks'))
webhooks
  .command('create <targetType>')
  .description('create webhook')
  .option('-t, --targetID <targetID>', 'target id')
  .action(cmd('webhooks'))
webhooks
  .command('update <webhookID> <url>')
  .description('update webhook')
  .action(cmd('webhooks'))
webhooks
  .command('delete <webhookID>')
  .description('delete webhook')
  .action(cmd('webhooks'))

const weblinks = program
  .command('weblinks')
  .description('web link commands')
weblinks
  .command('get <weblinkID>')
  .description('get web link')
  .action(cmd('weblinks'))
weblinks
  .command('create <name>')
  .description('create web link')
  .option('-p, --parentID <parentID>', 'parent folder id')
  .option('-u, --url <url>', 'url of web link')
  .option('-d, --description <description>', 'description of web link')
  .action(cmd('weblinks'))
weblinks
  .command('update <weblinkID>')
  .description('update web link')
  .option('-n, --name <name>', 'name of web link')
  .option('-d, --description <description>', 'description of web link')
  .action(cmd('weblinks'))
weblinks
  .command('delete <weblinkID>')
  .description('delete web link')
  .action(cmd('weblinks'))

program.parse()

function cmd (action) {
  return require(`./src/${action}`)
}
