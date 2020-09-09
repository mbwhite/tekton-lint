/* eslint-disable global-require */
const rules = {
  'no-resourceversion': require('./rules/no-resourceversion.js'),

  // no-duplicate-env
  'no-task-step-duplicate-env': require('./rules/no-task-step-duplicate-env.js'),

  // no-duplicate-param
  'no-pipeline-extra-params': require('./rules/no-pipeline-extra-params.js'),
  'no-binding-duplicate-params': require('./rules/no-binding-duplicate-params.js'),
  'no-pipeline-duplicate-params': require('./rules/no-pipeline-duplicate-params.js'),
  'no-task-duplicated-params': require('./rules/no-task-duplicated-params.js'),
  'no-template-duplicate-params': require('./rules/no-template-duplicate-params.js'),
  'no-pipelinerun-duplicate-params': require('./rules/no-pipelinerun-duplicate-params.js'),
  'no-pipeline-task-duplicate-params': require('./rules/no-pipeline-task-duplicate-params.js'),

  // no-duplicate-resource
  'no-resource-redefine': require('./rules/no-resource-redefine.js'),

  // no-extra-param
  'no-pipeline-task-extra-params': require('./rules/no-pipeline-task-extra-params.js'),
  'no-pipeline-taskspec-extra-params': require('./rules/no-pipeline-taskspec-extra-params.js'),
  'no-template-pipeline-extra-parameters': require('./rules/no-template-pipeline-extra-parameters.js'),

  // no-invalid-dag
  'no-pipeline-task-cycle': require('./rules/no-pipeline-task-cycle.js'),

  // no-invalid-name
  'no-invalid-parameter-name': require('./rules/no-invalid-parameter-name.js'),
  'no-invalid-resource-name': require('./rules/no-invalid-resource-name.js'),

  // no-invalid-param-type
  'no-binding-missing-params': require('./rules/no-binding-missing-params.js'),
  'no-wrong-param-type': require('./rules/no-wrong-param-type.js'),

  // no-latest-image
  'prefer-baseimage-version': require('./rules/prefer-baseimage-version.js'),

  // no-missing-param
  'no-pipeline-task-missing-params': require('./rules/no-pipeline-task-missing-params.js'), // TODO: split -> no-invalid-param-type
  'no-pipeline-taskspec-missing-params': require('./rules/no-pipeline-taskspec-missing-params.js'),
  'no-template-pipeline-missing-parameters': require('./rules/no-template-pipeline-missing-parameters.js'),

  // no-missing-resource
  'no-listener-missing-binding': require('./rules/no-listener-missing-binding.js'),
  'no-listener-missing-template': require('./rules/no-listener-missing-template.js'),
  'no-template-missing-pipeline': require('./rules/no-template-missing-pipeline.js'),
  'no-pipeline-missing-condition': require('./rules/no-pipeline-missing-condition.js'),
  'no-pipeline-missing-task': require('./rules/no-pipeline-missing-task.js'), // TODO: split -> no-invalid-dag

  // no-missing-workspace
  'no-pipeline-task-missing-workspace': require('./rules/no-pipeline-task-missing-workspace.js'),
  'no-template-pipeline-missing-workspace': require('./rules/no-template-pipeline-missing-workspace.js'),

  // no-undefined-param
  'no-pipeline-task-undefined-params': require('./rules/no-pipeline-task-undefined-params.js'),
  'no-task-undefined-params': require('./rules/no-task-undefined-params.js'),
  'no-template-undefined-params': require('./rules/no-template-undefined-params.js'),

  // no-undefined-result
  'no-pipeline-task-undefined-result': require('./rules/no-pipeline-task-undefined-result.js'),
  'no-pipeline-task-missing-reference': require('./rules/no-pipeline-task-missing-reference.js'),

  // no-undefined-volume
  'no-task-undefined-volume': require('./rules/no-task-undefined-volume.js'),

  // no-unused-param
  'no-task-unused-params': require('./rules/no-task-unused-params.js'),
  'no-condition-unused-params': require('./rules/no-condition-unused-params.js'),
  'no-template-unused-params': require('./rules/no-template-unused-params.js'),

  // prefer-beta
  'no-params-api-mix': require('./rules/no-params-api-mix.js'),
  'prefer-beta-version': require('./rules/prefer-beta-version.js'),

  // prefer-kebab-case
  'prefer-kebab-naming': require('./rules/prefer-kebab-naming.js'),
};

module.exports = rules;
