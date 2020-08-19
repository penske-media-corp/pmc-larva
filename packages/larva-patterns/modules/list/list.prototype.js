module.exports = {
	list_classes: 'a-font-body-m',
	list_markup: 'Paragraph Text.',
	list_type: 'u',
	list_items: [ 
		'item_one', 
		'item_two', 
		'item_list',
		{
			list_classes: 'a-font-body-m',
			list_markup: 'Paragraph Text.',
			list_type: 'u',
			list_item_classes: '',
			list_items: [
				'sub_item_one',
				'sub_item_two',
				{
					list_classes: 'a-font-body-m',
					list_markup: 'Paragraph Text.',
					list_type: 'u',
					list_item_classes: '',
					list_items: [
						'sub_sub_item_one',
						'sub_sub_item_two',
						{
							list_classes: 'a-font-body-m',
							list_markup: 'Paragraph Text.',
							list_type: 'u',
							list_item_classes: '',
							list_items: [
								'sub_sub_sub_item_one',
								'sub_sub_sub_item_two'
							]
						}
						
					]
				}
			]
		}
	],
	list_item_classes: ''
};
