'use strict';

/**
 * @ngdoc service
 * @name jaredv2App.servDeals
 * @description
 * # servDeals
 * Service in the jaredv2App.
 */
angular.module('jaredv2App')
  .service('servDeals', function ($resource) {
   

    // AngularJS will instantiate a singleton by calling "new" on this function
  	 return $resource('jsons/serverinfo.json',{},{
    	query:{
    			method:'GET',
    			params:{serverId:'server'},
    			isArray: true
    		}
    });

  });
