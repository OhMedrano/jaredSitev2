'use strict';

/**
 * @ngdoc function
 * @name jaredv2App.controller:CentersCtrl
 * @description
 * # CentersCtrl
 * Controller of the jaredv2App
 */
angular.module('jaredv2App')
  .controller('CentersCtrl', function ($scope) {
    $scope.dataCenter = [{
    				'name':'725 S. Wells, Chicago',
    				'space':6000,
    				'fload':250,
    				'powDen':10,
    				'infra':[
    					'5',
    					'UPS - 750kVA Chkloride UPS N+1, 15 minute battery capacity',
    					'1.5MW + 1MW Generators',
    					'230+ ton Smardt Chillers',
    					'4x 70 ton CRAC units'


    				],
    				'networks':[
    				'SteadFast Networks',
    				'AboveNet',
    				'AT&T',
    				'Verzion',
    				'Qwest',
    				'Level(3)',
    				'Cogent','Sidera','T-Systems','XO'
    				]
    				
    			},
    			{
    				'name':'350 E. Cermak, Chicago',
    				'space':16000,
    				'fload':250,
    				'powDen':12,
    				'infra':[
    					'100+MW and 3 substations',
    					'2N redundant power distribution',
    					'UPS - 2N 750kVA Libert UPS, 15 minute battery capacity',
    					'2MW + 1MW Generators',
    					'Building-provided redundant chilled water',
    					'16x 20 ton CRAC units'


    				],
    				'networks':[
    				'SteadFast Networks',
    				'AboveNet',
    				'AT&T',
    				'Verzion',
    				'Qwest',
    				'Level(3)',
    				'BT',
    				'CME','ICE','Cogent','Sidera','T-Systems','XO'
    				]
    				
    			}
    ];


    $scope.logoImages = ['aboveNet','att','cogent','level3','qwest','steadfast','verzion'];

    

  });
