var test = require('tape'),
	intersect = require('./')

test('bbox-intesect -- intersect', function(t){
	var bbox1 = [0,0,1,1]
	var bbox2 = [.5,.5,2,2]

	t.equals(intersect(bbox1, bbox2), true)
	t.equals(intersect(bbox2, bbox1), true)

	t.end()
})

test('bbox-intesect -- no intersect', function(t){
	var bbox1 = [0,0,1,1]
	var bbox2 = [2,2,3,3]

	t.equals(intersect(bbox1, bbox2), false)
	t.equals(intersect(bbox2, bbox1), false)

	t.end()
})