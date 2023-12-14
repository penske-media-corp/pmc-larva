module.exports = {
	list_classes: 'a-font-body-m',
	list_markup: 'Paragraph Text.',
	list_type_name: 'u',
	list_items: [
		{
			list_markup: 'item_one',
		},
		{
			list_markup: 'item_two',
		},
		{
			list_classes: 'a-font-body-m',
			list_markup: 'Paragraph Text with sub items woo.',
			list_type_name: 'u',
			list_item_classes: '',
			list_items: [
				{
					list_markup: 'sub_item_one',
				},
				{
					list_markup: 'sub_item_two',
				},
				{
					list_classes: 'a-font-body-m',
					list_markup: 'Paragraph Text.',
					list_type_name: 'u',
					list_item_classes: '',
					list_items: [
						{
							list_markup: 'sub_sub_item_one',
						},
						{
							list_markup: 'sub_sub_item_two',
						},
						{
							list_classes: 'a-font-body-m',
							list_markup: 'Paragraph Text.',
							list_type_name: 'u',
							list_item_classes: '',
							list_items: [
								{
									list_markup: 'sub_sub_sub_item_one',
								},
								{
									list_markup: 'sub_sub_sub_item_two',
								},
							],
						},
					],
				},
			],
		},
	],
	list_item_classes: '',
};
